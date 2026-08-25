"use client";

import { createDoctor, getAvailableDoctors, getDoctors, updateDoctor } from "../lib/actions/doctors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface AvailableDoctor {
  id: string;
  name: string;
  specialty: string;
  bio: string | null;
  imageUrl: string;
  phone: string;
  gender: "MALE" | "FEMALE";
  appointmentCount: number;
}

export function useGetDoctors() {
  const result = useQuery<any>({
    queryKey: ["getDoctors"],
    queryFn: getDoctors,
  });

  return result;
}

export function useCreateDoctor() {
  const queryClient = useQueryClient();

  const result = useMutation<any, any, any>({
    mutationFn: createDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error while  creating a doctor"),
  });

  return result;
}

export function useUpdateDoctor() {
  const queryClient = useQueryClient();

  return useMutation<any, any, any>({
    mutationFn: updateDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
      queryClient.invalidateQueries({ queryKey: ["getAvailableDoctors"] });
    },
    onError: (error) => console.error("Failed to update doctor:", error),
  });
}

// get available doctors for appointments
export function useAvailableDoctors() {
  const result = useQuery<AvailableDoctor[]>({
    queryKey: ["getAvailableDoctors"],
    queryFn: getAvailableDoctors,
  });

  return result;
}
