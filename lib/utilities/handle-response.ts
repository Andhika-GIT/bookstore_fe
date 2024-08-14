export const handleFetchResponse = async (response: Response) => {
  const result = await response.json();

  if (!response.status.toString().startsWith("2")) {
    const error = new Error(result.message || "Something went wrong");
    (error as any).status = result.statusCode;
    (error as any).errorData = result;
    throw error;
  }
  return result;
};
