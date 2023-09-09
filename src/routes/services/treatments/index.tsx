import styles from './Treatment.module.scss';
import React, {useState} from 'react';
import {IServices} from 'types/services';
import Observer from '@components/observer/Observer';
import Link from '@components/link/Style2';
import Button from '@components/buttons/Style3';

const Treatment = ({services}: {services: IServices[]}) => {

  const [more, setMore] = useState<string[]>([]);

  const [viewImage, setViewImage] = useState("");

  const onMore = (id: string) => {
    if(more.includes(id)) {
      setMore(more => more.filter(ids => ids !== id))
    } else {
      setMore(more => [...more, id]);
    }
  }

  return (
    <div className={styles.container}>

    {viewImage && 
      <div className={styles.viewImage} onClick={() => setViewImage("")}>
        <img src={viewImage} alt="large-image" onClick={e => e.stopPropagation()}/>
      </div>
    }

    {services.map((el, index) => 
      <Observer key={el._id}>
        <div className={`${styles.element} ${index % 2 !== 0 ? styles.even : styles.odd}`} id={el.text_2}>
          <div className={styles.text}>
              {el.text_1 && <p className={styles.p1}>{el.text_1}</p>}
              
              {el.text_2 && <h1 className={styles.p2}>{el.text_2}</h1>}

              {el.text_3 && <p className={styles.p3}>{el.text_3}</p>}

              {el.text_4 && <p className={styles.p4}> {el.text_4} </p>}

              {el.text_5 && <p className={styles.p5}> {el.text_5} </p>}

              <div className={styles.actions}>
                <Link href="https://booking.casabellalondon.co.uk" value="Book Now" style={{width: "200px"}} rel="noopener noreferrer" target="_blank" />
                {el.more && <Button value="More info" onClick={() => onMore(el._id)} open={more.includes(el._id)} color="light" /> }
              </div>

          </div>

          <div className={styles.image}>
            <div/>
            <img src={el.image} alt="treatments"/>
          </div>
          
          {more.includes(el._id) && 
            <div className={styles.more}>
              {el.more.split("\n").map((tag, index) => 
                    tag.includes("<p>") ? 
                        <p key={index}>{tag.replaceAll("<p>", " ").replaceAll("</p>", " ")}</p>
                    : tag.includes("<h1>") ?
                        <h1 key={index}>{tag.replaceAll("<h1>", " ").replaceAll("</h1>", " ")}</h1>
                    : tag.includes("<h2>") ? 
                        <h2 key={index}>{tag.replaceAll("<h2>", " ").replaceAll("</h2>", " ")}</h2>
                    : tag.includes("<h3>") ?
                        <h3 key={index}>{tag.replaceAll("<h3>", " ").replaceAll("</h3>", " ")}</h3>
                    : tag.includes("<youtube>") ?
                        <iframe key={index} width="100%" height="400" 
                            src={tag.replaceAll("<youtube>", " ").replaceAll("</youtube>", " ")} 
                            title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    : tag.includes("<video>") ?
                        <video key={index} controls muted>
                            <source src={tag.replaceAll("<video>", " ").replaceAll("</video>", " ")} type="video/mp4" />
                        </video>
                    :  tag.includes("<img>") ?
                        <img onClick={() => setViewImage(tag.replaceAll("<img>", " ").replaceAll("</img>", " "))} 
                        key={index} src={tag.replaceAll("<img>", " ").replaceAll("</img>", " ")} alt="item" />
                    : ""
                )}
            </div>
          }

        </div>
      </Observer>
    )}

    </div>
  )
}

export default Treatment