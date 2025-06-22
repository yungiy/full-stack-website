'use server';

import { Database } from '../../types_db';
import { createServerSupabaseClient } from "utils/supabase/server";

// 타입선언
export type TodoRow = Database["public"]["Tables"]["todo"]["Row"];
export type TodoRowInsert = Database["public"]["Tables"]["todo"]["Insert"];
export type TodoRowUpdate = Database["public"]["Tables"]["todo"]["Update"];

// 에러 처리
function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

// todo 항목 가져오기
export async function getTodos({ searchInput = "" }): Promise<TodoRow[]> {
  const supabase = await createServerSupabaseClient();
  // sql 쿼리 생성
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .like("title", `%${searchInput}%`)
    .order("created_at", { ascending: true });

  if (error) {
    handleError(error);
  }

  return data;
}


// todo 생성
export async function createTodo(todo: TodoRowInsert) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("todo").insert({
    ...todo,
    created_at: new Date().toISOString(),
  });

  if (error) {
    handleError(error);
  }

  return data;
}

// todo 수정
export async function updateTodo(todo: TodoRowUpdate) {
  const supabase = await createServerSupabaseClient();
  console.log(todo);

  const { data, error } = await supabase
    .from("todo")
    .update({
      ...todo,
      updated_at: new Date().toISOString(),
    })
    .eq("id", todo.id);

  if (error) {
    handleError(error);
  }

  return data;
}

// todo 삭제
export async function deleteTodo(id: number) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("todo").delete().eq("id", id);

  if (error) {
    handleError(error);
  }

  return data;
}