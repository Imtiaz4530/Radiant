"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckAuthToken = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(false);
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  return { loading };
};

export const useHandleLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  return { loading };
};
