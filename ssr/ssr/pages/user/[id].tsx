import { useRouter } from 'next/router'
//demo client side rendering
export default function AdminUser(){
    const rauter = useRouter();

    console.log("rauter", rauter.query.id);

    return(
        <h1>Admin user page</h1>
    )
}