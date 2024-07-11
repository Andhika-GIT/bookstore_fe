export const handleFetchResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.status.toString().startsWith("2")) {
    const error = new Error(data.message || "Something went wrong");
    (error as any).status = data.statusCode;
    (error as any).errorData = data;
    throw error;
  }
  return data;
};
