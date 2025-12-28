-- Create reviews table for customer testimonials with moderation
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL CHECK (char_length(comment) >= 20),
  event_type VARCHAR(50),
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved reviews
CREATE POLICY "Anyone can read approved reviews"
ON public.reviews
FOR SELECT
USING (is_approved = true);

-- Policy: Anyone can insert reviews (but they start as unapproved)
CREATE POLICY "Anyone can submit reviews"
ON public.reviews
FOR INSERT
WITH CHECK (true);

-- Create index for faster queries on approved reviews
CREATE INDEX idx_reviews_approved ON public.reviews(is_approved, created_at DESC);

-- Create immutable function for date extraction (needed for unique index)
CREATE OR REPLACE FUNCTION public.get_date_from_timestamptz(ts TIMESTAMP WITH TIME ZONE)
RETURNS DATE
LANGUAGE SQL
IMMUTABLE
AS $$
  SELECT ts::date;
$$;

-- Create unique constraint to limit one review per email per day (anti-spam)
CREATE UNIQUE INDEX idx_reviews_email_daily 
ON public.reviews (email, public.get_date_from_timestamptz(created_at)) 
WHERE email IS NOT NULL;