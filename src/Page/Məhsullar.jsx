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
        {
          firstData.text && (
            <div className="Mehsul-info">
              {firstData.text.map((item,id)=>(
                <div key={id} className="Mehsul-infoItem">
                  <h3>{item.h4}</h3>
                <p>{item.word}</p>
                </div>
                
              ))}
            </div>
          )
        }
         {firstData.name && (
                    <div className="MehsulFirst">
            <div className="MehsulFirst-img">
              <img src={firstData.img} alt="" />
            </div>
         
            <div className="MehsulFirst-word">
              <h3>{firstData.name}</h3>
              <p>{firstData.title}</p>
              {firstData.titleSecond && (

              <p>{firstData.titleSecond}</p>
              )}
              <button className="Mehsul-Submite">Sifaris et</button>
              <p>
                <strong>{firstData.Mehsul[0]} </strong> <span>{firstData.Mehsul[1]}</span>
              </p>
              {firstData.Stikformati && (
              <p>
                <strong>{firstData.Stikformati[0]}</strong>{" "}
                <span>{firstData.Stikformati[1]}</span>
              </p>

              )}
              {firstData.Tezyig && (
              <p>
                <strong>{firstData.Tezyig[0]} </strong> <span>{firstData.Tezyig[1]}</span>
              </p>

              )}
              {firstData.Icindeki && (
              <p>

                <strong>{firstData.Icindeki[0]}</strong> <span>{firstData.Icindeki[1]}</span>
              </p>

              )}
              {firstData.Material && (
              <p>

                <strong>{firstData.Material[0]}</strong> <span>{firstData.Material[1]}</span>
              </p>

              )}
              {firstData.Xalis && (
              <p>
                <strong>{firstData.Xalis[0]} </strong> <span>{firstData.Xalis[1]}</span>
              </p>

              )}
              {firstData.Davamlilig && (
              <p>
                <strong>{firstData.Davamlilig[0]} </strong>{" "}
                <span>{firstData.Davamlilig[1]}</span>
              </p>
                
              )}
            </div>
          </div>
         )}

        </div>
      </div>

      <section className="Mehsulİtems">
        <h2>Daha çox məhsul kəşf edin</h2>
        <div className="MehsulItem-container">
          {mehsuls.map((item, id) => (
            <>
            {
              item.name && (
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
              )
            }

            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Məhsullar