using Microsoft.AspNetCore.Http;

namespace SortAlgorithms.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string messsage)
        {
            response.Headers.Add("Application-Error", messsage);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}