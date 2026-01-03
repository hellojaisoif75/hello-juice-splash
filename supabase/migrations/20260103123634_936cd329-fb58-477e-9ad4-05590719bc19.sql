-- Add columns for admin replies to reviews
ALTER TABLE public.reviews
ADD COLUMN admin_reply text,
ADD COLUMN replied_at timestamp with time zone;