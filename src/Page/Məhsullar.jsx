import React, { useEffect } from 'react'
import { useState } from 'react'
import { mehsuls } from '../data/data'

function Məhsullar() {
  const [firstData,setfirstData] = useState(mehsuls[0])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [firstData]);
  return (
    <>
      <div className="Mehsul">
        <div className="Mehsul-container">
          <div className="MehsulFirst">
            <div className="MehsulFirst-img">
              <img src={firstData.img} alt="" />
            </div>
            <div className="MehsulFirst-word">
              <h3>{firstData.name}</h3>
              <p>{firstData.title}</p>
              <button className="Mehsul-Submite">Sifaris et</button>
              <p>
                <strong>Məhsul: </strong> <span>{firstData.Mehsul}</span>
              </p>
              <p>
                <strong>Stik formati: </strong>{" "}
                <span>{firstData.Stikformati}</span>
              </p>
              <p>
                <strong>Təzyiq: </strong> <span>{firstData.Tezyig}</span>
              </p>
              <p>
                <strong>İçindəkilər: </strong> <span>{firstData.Icindeki}</span>
              </p>
              <p>
                <strong>Xalis Çəki : </strong> <span>{firstData.Xalis}</span>
              </p>
              <p>
                <strong>Davamliliq: </strong>{" "}
                <span>{firstData.Davamlilig}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="Mehsulİtems">
        <h2>Daha çox məhsul kəşf edin</h2>
        <div className="MehsulItem-container">
          {mehsuls.map((item, id) => (
            <>
              <div
                onClick={() => setfirstData(item)}
                key={id}
                className="MehsulItem"
              >
                <div className="MehsulItem-word">
                  <h3>{item.name}</h3>
                </div>
                <div className="MehsulItem-img">
                  <img src={item.img} alt="" />
                </div>
                
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Məhsullar