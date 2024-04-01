import { axiosInstance } from "../middleware";

export const getSearch = async (param) => {
  const response = await axiosInstance.get("/search", {
    params: {
      term: param,
    },
  });
  return response;
};
