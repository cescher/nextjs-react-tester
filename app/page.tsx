'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCompanies from '../lib/useCompanies';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
export default function Home() {const {companies, loading, error} = useCompanies();
 const totalEmployees = companies.reduce((accumulator , company) => accumulator + company.employees,0);
 const totalRevenue = companies.reduce((accumulator, company)=>accumulator + company.revenue,0);
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-700 text-white space-y-6">
      <div className="bg-white/10 p-4">
        <div className="container">
          <h2 className="font-ornate text-2xl font-semibold tracking-tighter ">
            React Next.js Tester
          </h2>
        </div>
      </div>
      <div className="container">
        <Card>
          <CardHeader className="px-7">
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">Error: {error}</p>}
              {!loading && !error && companies.length >0 && (
                  <div>
                      <div className="bg-gray-300 font-bold p-4 text-xl">
                          Companies
                      </div>
                      <Table>
                          <TableHeader>
                              <TableRow>
                              <TableCell className="font-bold">Company Name</TableCell>
                          <TableCell className="font-bold" >Description</TableCell>
                          <TableCell className="font-bold">Location</TableCell>
                          <TableCell className="font-bold">Website</TableCell>
                          <TableCell className="font-bold">Revenue</TableCell>
                          <TableCell className="font-bold">Employees</TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {companies.map((company) => (
                            <TableRow key={company.id}>
                              <TableCell>{company.name}</TableCell>
                              <TableCell>{company.description}</TableCell>
                              <TableCell>{company.location}</TableCell>
                              <TableCell>
                                <a href={company.website} className="text-blue-500">
                                  {company.website}
                                </a>
                              </TableCell>
                              <TableCell>${company.revenue.toLocaleString()}</TableCell>
                              <TableCell>{company.employees}</TableCell>
                            </TableRow>
                        ))}
                      </TableBody>
                        <TableFooter>
                            <tr className="bg-gray-300 font-bold">
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>

                                <TableCell></TableCell>
                                <TableCell>${totalRevenue.toLocaleString()}</TableCell>
                                <TableCell>{totalEmployees}</TableCell>
                            </tr>
                        </TableFooter>
                    </Table>
                  </div>
              )}
            </div>

          </CardContent>
        </Card>
      </div>


    </div>
  );
}
