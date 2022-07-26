import './Links.css'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'
import soundcloud from '../icons/soundcloud.svg'
import fivehundredx from '../icons/500px.svg'
import instagram from '../icons/instagram.svg'
import arrow from '../icons/arrow.svg'

function Links(props) {
  const linkArray = [
    {
      title: 'Job',
      contents: [
        {
          decription: "Visit my github account to see the projects I've made.",
          icon: github,
          link: 'https://github.com/Mehmet-Alemdar'
        },
        {
          decription: "Visit my LinkedIn profile.",
          icon: linkedin,
          link: 'https://www.linkedin.com/in/mehmet-alemdar/'

        }
      ]
    },
    {
      title: 'Art',
      contents: [
        {
          decription: "Visit my soundcloud account to listen to my music recordings.",
          icon: soundcloud,
          link: 'https://soundcloud.com/mehmet-alemdar-557745551'

        },
        {
          decription: "Visit my 500px account to see the various photos I took.",
          icon: fivehundredx,
          link: 'https://500px.com/p/alemdarmehmet6?view=photos'

        }
      ]
    },
    {
      title: 'Social',
      contents: [
        {
          decription: "Visit my Instagram account.",
          icon: instagram,
          link: 'https://www.instagram.com/mehmetalemdarr/'

        }
      ]
    },
  ]

  const link = linkArray.find(element => element.title === props.name)


  // const job = [
  //   {
  //     decription: "Visit my github account to see the projects I've made.",
  //     icon: github
  //   },
  //   {
  //     decription: "Visit my github account to see the projects I've made.",
  //     icon: linkedin
  //   }
  // ]
  // const art = [
  //   {
  //     decription: "Visit my github account to see the projects I've made.",
  //     icon: github
  //   },
  //   {
  //     decription: "Visit my github account to see the projects I've made.",
  //     icon: linkedin
  //   }
  // ]
  return (
    <div id='link'>
      {
        link.contents.map((element, i) => {
          return (
            <div className="link-container">
              <div className="link-container-description">
                <p>{element.decription}</p>
              </div>
              <img className="link-container-arrow" src={arrow} alt='arrow' />
              <a href={element.link} target="_blank" rel="noreferrer noopener">
                <img className="link-container-icon" src={element.icon} alt='github'/>

              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Links