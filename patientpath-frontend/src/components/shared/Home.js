const Home = () => {
    return ( 
        <div className="main container">
            <h1>Patient Path</h1>
            <iframe 
                title="HHS Content Syndication"
                src="https://api.digitalmedia.hhs.gov/api/v2/resources/media/61/syndicate.html?stripStyles=true&stripScripts=false&stripBreaks=false&stripImages=false&stripClasses=true&stripIds=false&displayMethod=undefined&autoplay=false"
                sandbox="allow-scripts allow-same-origin"
                width="100%" 
                height="400" 
                name="Syndicated Content" 
                frameborder="0">
            </iframe>
        </div>
     );
}
 
export default Home;