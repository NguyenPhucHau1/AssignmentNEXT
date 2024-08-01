'use client';
import React from 'react';
import Link from 'next/link';

function TinTucCard({ data, language }) {
  const filteredData = data.filter(p => p.loai === 1).slice(0, 4);
  const sortedData = [...filteredData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="row">
      {sortedData.map((p) => {
        const { _id, titleVN, titleEN, describeVN, describeEN, image } = p;
        const title = language === 'vi' ? titleVN : titleEN;
        const description = language === 'vi' ? describeVN : describeEN;

        return (
          <div key={_id} className="col-md-6 col-sm-12 tintuc-card">
            <div className="card mb-4">
              <div className="card-body">
                <Link className='card-a' href={`/showtintuc/${_id}`}><h3 className="card-title">{title}</h3></Link>
                <div>
                  <small>{p.tacgia} | </small>
                  <small>{new Date(p.createdAt).toLocaleString()}</small>
                </div>
                <hr />
                <p className="card-text">{description}</p>
              </div>
              <Link className='card-a' href={`/showtintuc/${_id}`}><img src={image} className="card-img-top" alt={title} /></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TinTucCard;
