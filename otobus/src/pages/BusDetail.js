import React from 'react';
import { useParams } from 'react-router-dom';

function BusDetail() {
  const { hatNo } = useParams();

  // Örnek veriyi buradan çekebilirsin veya API'den alabilirsin
  const exampleData = {
    474: [
      { saat: '06.15', kazanilanSure: '+5', guncelSaat: '06.10' },
      { saat: '06.30', kazanilanSure: '-2', guncelSaat: '06.32' },
      // Diğer saatler...
    ],
    486: [
      { saat: '15.00', kazanilanSure: '+5', guncelSaat: '14.55' },
      // vs...
    ]
  };

  const saatler = exampleData[hatNo] || [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>{hatNo} Numaralı Hattın Sefer Saatleri</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th>Sefer Saati</th>
            <th>Kazanılan Süre</th>
            <th>Güncel Saat</th>
          </tr>
        </thead>
        <tbody>
          {saatler.map((item, index) => (
            <tr key={index} style={{ textAlign: 'center', padding: '10px' }}>
              <td>{item.saat}</td>
              <td style={{ color: item.kazanilanSure.includes('-') ? 'red' : 'green' }}>
                {item.kazanilanSure}
              </td>
              <td>{item.guncelSaat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusDetail;
