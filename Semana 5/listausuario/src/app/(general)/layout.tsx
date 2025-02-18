import NavBar from "../Components/NavBar";
import ProviderUsuario from "../Provider/ProviderUsuario";

export default function  LayoutSecundario({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    
    <ProviderUsuario>
      <NavBar></NavBar>
      {children}
    </ProviderUsuario>
 
   
      
    </>
  );
}