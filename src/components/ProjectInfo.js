import React from 'react';
import projectImg from '../assets/projectImg.png'; // Görselin doğru yolu

function ProjectInfo() {
  return (
    <section className="project-info" style={styles.projectInfo}>
      <div className="info-container" style={styles.infoContainer}>
        {/* Proje Tanıtımı kısmı */}
        <div className="project-image" style={styles.projectImage}>
          <h2>Proje Tanıtımı</h2>
          <img src={projectImg} alt="Proje Görseli" style={styles.projectImageStyle} />
          <h3><strong>Akıllı Yazılım, Maksimum Verimlilik!</strong></h3>
          <p>Bu proje, mermer kesim işlemlerinde mermerin israfını en aza indirgemek için tasarlanmış bir yazılımdır...</p>
        </div>

        {/* Takım Tanıtımı kısmı */}
        <div className="team-info" style={styles.teamInfo}>
          <h2>Takım Tanıtımı</h2>
          <div className="team-member" style={styles.teamMember}>
            <h3>Onur Kayacan</h3>
            <h4>Proje Yöneticisi</h4>
            <p>Elektrik-Elektronik mühendisliği öğrencisi</p>
          </div>
          <div className="team-member" style={styles.teamMember}>
            <h3>Esra Özkutlu</h3>
            <h4>Takım Üyesi</h4>
            <p>Bilgisayar mühendisliği öğrencisi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  projectInfo: {
    display: 'flex',
    justifyContent: 'space-between', // Öğeleri yatayda iki yana yay
    alignItems: 'flex-start', // Üstten hizalama
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    margin: '20px',
  },
  infoContainer: {
    display: 'flex',
    width: '100%',
  },
  projectImage: {
    flex: '1', // Görselin solda yer almasını sağlar
    textAlign: 'left',
  },
  projectImageStyle: {
    width: '100%', // Görselin genişliği konteynerin genişliğine uyum sağlar
    maxWidth: '700px', // Görselin maksimum genişliği
    height: 'auto', // Görselin yüksekliği orantılı olarak ayarlanır
    borderRadius: '8px', // Görsele yuvarlatılmış kenar
  },
  teamInfo: {
    flex: '1', // Takım bilgileri sağda yer alır
    textAlign: 'left',
    paddingLeft: '20px',
  },
  teamMember: {
    backgroundColor: '#e1e1e1',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
  },
};

export default ProjectInfo;
