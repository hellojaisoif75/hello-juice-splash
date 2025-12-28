-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.get_date_from_timestamptz(ts TIMESTAMP WITH TIME ZONE)
RETURNS DATE
LANGUAGE SQL
IMMUTABLE
SET search_path = public
AS $$
  SELECT ts::date;
$$;