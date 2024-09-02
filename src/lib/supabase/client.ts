import { SUPABASE_KEY, SUPABASE_URL } from "@/config";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);