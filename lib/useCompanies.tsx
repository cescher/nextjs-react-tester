'use client';
import {useState, useEffect} from 'react';

interface Company {
    id: string;
    name: string;
    description: string;
    location: string;
    website: string;
    revenue: number;
    employees: number;
}

interface CompaniesResponse{
    companies:Company[];
}
const useCompanies = ()=>{
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompanies = async ()=>{
            try{
                setLoading(true);
                const response = await fetch('https://venefish.enesien.com/api/companies');
                const data:CompaniesResponse = await response.json();



                if (Array.isArray(data)) {
                    setCompanies(data);
                } else {
                    alert('Unexpected type of companies response.');
                }

              console.log('data: ',data);
               // console.log('data.companies: ',data.companies);
               // setCompanies(data.companies);
                setLoading(false);

            }catch(err:unknown){
                if (err instanceof Error) {
                    alert(err.message);
                } else {
                    alert('An unknown error occurred.');
                }

            }
        }

        fetchCompanies();

    }, []);

    return {companies, loading, error}

}

export default useCompanies;