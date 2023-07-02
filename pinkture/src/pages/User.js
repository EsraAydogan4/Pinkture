<<<<<<< HEAD
import React from 'react';

class PinterestProfilSayfasi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: null, // Pinterest profili burada depolanacak
      loading: true, // Veriler yüklenirken durumu takip etmek için bir yükleme durumu
      error: null // Hata durumu için bir alan
    };
  }

  componentDidMount() {
    // Pinterest profili için gerekli API isteğini burada yapabilirsiniz
    // Örnek bir API isteği kullanalım
    fetch('https://api.pinterest.com/v3/profile')
      .then(response => response.json())
      .then(data => {
        this.setState({ profile: data, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { profile, loading, error } = this.state;

    if (loading) {
      return <div>Profil yükleniyor...</div>;
    }

    if (error) {
      return <div>Hata: {error}</div>;
    }

    return (
      <div className="pinterest-profil-sayfasi">
        <h1>Pinterest Profil Sayfası</h1>
        {profile && (
          <div className="profil-bilgileri">
            <h2>{profile.name}</h2>
            <img src={profile.avatar} alt="Profil Resmi" />
            <p>Takipçi Sayısı: {profile.followers}</p>
            <p>Takip Edilen Sayısı: {profile.following}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PinterestProfilSayfasi;
=======
import React from 'react'

function User() {
  return (
    <div className='page'>
      User
    </div>
  )
}

export default User
>>>>>>> 832ab570839cda7c42f6567495b32be193374d57
