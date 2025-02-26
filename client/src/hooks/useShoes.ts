import { useMutation, useQuery } from "@tanstack/react-query";
import { shoesApi } from "../services/api";
import { ShoeData } from "../types";
import { data } from "react-router-dom";
export function useShose() {
  const shoes = useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoesApi.getAll().then((res) => res.data),
  });

  const shoe = (id: string) =>
    useQuery({
      queryKey: ["shoe", id],
      queryFn: () => shoesApi.getById(id).then((res) => res.data),
    });

  const create = (data: ShoeData) =>
    useMutation({
      mutationFn: () => shoesApi.create(data),
      onSuccess: () => {
        alert("olusturuldu");
      },
    });

  const edit = (id: string, data: ShoeData) =>
    useMutation({
      mutationFn: () => shoesApi.edit(id, data),
      onSuccess: () => {
        alert("Duzenlendi");
      },
    });

  const remove = (id: string, data: ShoeData) =>
    useMutation({
      mutationFn: () => shoesApi.delete(id),
      onSuccess: () => {
        alert("Duzenlendi");
      },
    });

  return { shoes, shoe, create };
}
