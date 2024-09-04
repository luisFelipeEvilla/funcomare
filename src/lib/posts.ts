import { createClient } from "./supabase/server";

export async function getPosts(filters: {
  limit?: number;
  offset?: number;
  orderBy?: string;
  orderDirection?: "asc" | "desc";
  search?: string;
}) {
  const client = createClient();
  const { data, error } = await client
    .from("posts")
    .select("*")
    .or(`titulo.ilike.%${filters.search || ""}%,contenido.ilike.%${filters.search || ""}%`)
    .range(filters.offset ?? 0, filters.limit ?? 10)
    .limit(filters.limit ?? 10) // Default limit to 10 if not provided
    .order(filters.orderBy ?? "created_at", {
      ascending: filters.orderDirection === "asc",
    });
  return data;
}
