export default function mapStatusHTTP(status: string) {
  const statusHTTPMap: Record<string, number> = {
    NOTFOUND: 404,
    UNAUTHORIZED: 401,
    SUCCESSFUL: 200,
  };
  return statusHTTPMap[status] ?? 500;
}
