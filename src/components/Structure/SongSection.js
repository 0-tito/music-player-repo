
export default function SongSection({text,title,children,head,...props}){
    return <section  {...props} >
        <h2 className={head} >
          <div> {title} </div> 
          <button> {text} </button>
          </h2>
        {children}
    </section>
}