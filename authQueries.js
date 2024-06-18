/* eslint-disable no-undef */
import { useMutation } from "react-query";

export const useSignUpMutation = () => {
  return useMutation(
    async (data) => {
      const { email, password, nickname } = data;
      return await api.auth.signUp(email, password, nickname);
    },
    {
      onSuccess: (data) => {
        console.log("회원가입 성공", data);
      },
      onError: (error) => {
        console.error("회원가입 실패", error);
      },
    }
  );
};

export const useSignInMutation = () => {
  return useMutation(
    async (data) => {
      const { email, password } = data;
      return await api.auth.signIn(email, password);
    },
    {
      onSuccess: (data) => {
        console.log("로그인 성공", data);
      },
      onError: (error) => {
        console.error("로그인 실패", error);
      },
    }
  );
};

export const useSignOutMutation = () => {
  return useMutation(
    async () => {
      return await api.auth.signOut();
    },
    {
      onSuccess: (data) => {
        console.log("로그아웃 성공", data);
      },
      onError: (error) => {
        console.error("로그아웃 실패", error);
      },
    }
  );
};

export const useGetUserMutation = () => {
  return useMutation(
    async () => {
      return await api.auth.getUser();
    },
    {
      onSuccess: (data) => {
        console.log("회원 정보 가져오기 성공", data);
      },
      onError: (error) => {
        console.error("회원 정보 가져오기 실패", error);
      },
    }
  );
};
