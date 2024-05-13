<div className="bottom">

<div className=" bakk flex justify-center">

<div className="authorstuff flex">

{/* <div className="category">
 <CategoryIcon/>
 {postData.categories.map((c, i) => (
     <p className='inline'>{c} </p>
 ))}
 </div> */}

 <div className="authorimg">
  <img className="rounded-full" src={urlFor(postData.authorImage).url()} alt="authorimage" />
 </div>{/** .authorimg */}

 <div className="author">
  {postData.name}
 </div>{/* .author */}
</div>{/* .authorstuff */}

 <div className="time flex">
 <div className="cal">
 <CalendarMonthIcon/>
 <Moment className="mr-2" format="DD/MM/YY">{postData.publishedAt}</Moment>
 </div>{/* .cal */}

 <div className="clock">
 <AccessTimeIcon /> 
 <Moment format="HH:MM">
 { postData.publishedAt }
 </Moment>
 </div>{/* .clock */}

 </div>{/* .time */}

 </div>

</div>{/* .bottom */}