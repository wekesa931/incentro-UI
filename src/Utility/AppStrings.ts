export default {
    signIn: "Sign In",
    interview: "interview",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTY5OTM0NTUsIm5iZiI6MTU5Njk5MzQ1NSwianRpIjoiM2Q5ZmU5Y2ItZTYxNy00MjdjLWE5ZDItNjAwYjIyMzQ3NTE4IiwiZXhwIjoxNTk3MDc5ODU1LCJpZGVudGl0eSI6eyJ1c2VyX2lkIjo0LCJjbGllbnRfaWQiOjMsImVtYWlsIjoiaGVsbG9AaW50ZWxpcHJvIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.UMP52MK04LvwKgzeJR1xNcqw4Q4f7Elrxii45xGH8KY"
}

export const HttpMethod = {
    POST: "GET",
    GET: "GET"
}

export const callPoint = {
    ROOT_URL: 'https://api.demo.reja.ai'
}

export interface SummaryData{
    customers: number;
    date: string,
    day: number
    revenue: number;
    transactions: number;
    year: number;
}
export interface FormInput {
    username: string,
    password: string
}