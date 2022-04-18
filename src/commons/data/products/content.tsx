
import Typography from 'src/commons/components/Typography';

const content = [
  {
    productId: 1,
    tabs: {
      overview: {
        primaryDescription: <>
            <Typography as = 'h5'  marginTop='2rem'  marginBottom='1rem'>Title</Typography>
            <Typography as = 'p' marginBottom='2.5rem'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt          
            </Typography>
        
        </>,
        assetDescription: <>
          <Typography as = 'h5' marginBottom='1rem'>Title</Typography>
          <Typography as = 'p'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
          </Typography>
          <Typography as = 'p' marginTop='1rem'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.              
          </Typography>
        </>,
                secondaryDescription: <>
            <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Title</Typography>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
 
            <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Title</Typography>
            <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.            
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
            
            </>,



      }
    }
  }

]


export default content;