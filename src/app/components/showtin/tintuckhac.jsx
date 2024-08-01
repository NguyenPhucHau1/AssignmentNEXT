import React from 'react';
import Link from 'next/link';

function TinTucKhac({ data, language }) {
  return (
    <div className="row">
      {data.map((p) => {
        const { _id, titleVN, titleEN, image, tacgia , createdAt } = p;
        const title = language === 'vi' ? titleVN : titleEN;

        return (
          <div key={_id} className="col-md-12 mb-4 tintuc-card">
            <div className="card">
              <Link href={`/showtintuc/${_id}`}>
                <img src={image} className="card-img-top" alt={title} />
              </Link>
              <div className="card-body">
                <div>
                    <small>{p.tacgia} | </small>  
                    <small> {new Date(p.createdAt).toLocaleString()}</small>
                </div>
                <h5>
                  <Link href={`/showtintuc/${_id}`}>
                    {title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TinTucKhac;
