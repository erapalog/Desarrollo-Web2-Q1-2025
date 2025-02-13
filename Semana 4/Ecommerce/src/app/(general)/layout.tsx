'use client'
import NavBar from "../Components/NavBar";
import Provider from "../Provider/Provider";

export default function  LayoutInterno({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Provider>
        <NavBar></NavBar>
        {children}
      </Provider>
     
    </div>
  );
}