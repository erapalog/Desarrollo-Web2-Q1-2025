import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main className="Container">


        <form>
          <div data-mdb-input-init className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" >Email address</label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label">Password</label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example34"  />
                <label className="form-check-label" > Remember me </label>
              </div>
            </div>

          </div>

          <Link href='/informacion' data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">
            Iniciar Sesion
          </Link>

         
        </form>



      


      </main>

    </div>
  );
}
