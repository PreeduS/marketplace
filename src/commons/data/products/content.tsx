
import Typography from 'src/commons/components/Typography';
import { BoxItems } from 'src/pages/Product/components/Product.styled'
import BoxItem from 'src/commons/components/BoxItem';
import forecastingImagePath from './images/intro.jpeg'



const content = [
  {
    productId: -1,
    tabs: {
      overview: {
        primaryDescription: <>
            <Typography as = 'h5'  marginTop='2rem'  marginBottom='1rem'>Title</Typography>
            <Typography as = 'p' marginBottom='2.5rem'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt          
            </Typography>
        
        </>,
        asset:{
   

        },  
          secondaryDescription: <>
            <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Title</Typography>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
            <BoxItems>

              <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
              <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
              <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
            </BoxItems>
  
            <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Title</Typography>
            <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.            
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
            
          </>,


      },
      docs: {
        description: <>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>
          
          <Typography as = 'p' marginBottom='1rem'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
          </Typography>
          <Typography as = 'p'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </Typography>
        </>,
      }, 
      info: {
        description: <>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>

          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
          </p>
          <BoxItems>

          <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
          <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
          <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
          <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
          <BoxItem title = 'title' details = 'details' description = 'descriptions'/>
          <BoxItem title = 'title' details = 'details' description = 'descriptions'/>

          </BoxItems>

        </>,
      }
    }
  },
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
        asset:{
          title: 'Routing Demo',
          imageUrl: forecastingImagePath,
          link: 'https://vrp-demo-ny.hs7svmevr5p.us-south.codeengine.appdomain.cloud',
          description: <>
            <Typography as = 'h5' marginBottom='1rem'>Title</Typography>
            <Typography as = 'p'>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
            </Typography>
            <Typography as = 'p' marginTop='1rem'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.              
            </Typography>
          </>,
        },
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



      },
      docs: {
        description: <>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>
          
          <Typography as = 'p' marginBottom='1rem'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
          </Typography>
          <Typography as = 'p'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </Typography>
        </>,
      }, 
      info: {
        description: <>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>

          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
          </p>
   

        </>,
      }
    }
  },
  {
    productId: 2,
    tabs: {
      overview: {
        primaryDescription: <>
            <Typography as = 'h5'  marginTop='2rem'  marginBottom='1rem'>Title</Typography>
            <Typography as = 'p' marginBottom='2.5rem'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt          
            </Typography>
        
        </>,
        asset:{
          title: 'Forecasting Demo',
          imageUrl: forecastingImagePath,
          link: 'http://forecasting-demo.hs7svmevr5p.us-south.codeengine.appdomain.cloud/',
          description: <>
            <Typography as = 'h5' marginBottom='1rem'>Title</Typography>
            <Typography as = 'p'>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
            </Typography>
            <Typography as = 'p' marginTop='1rem'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.              
            </Typography>
          </>,
        },
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



      },
      docs: {
        description: <>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>
          
          <Typography as = 'p' marginBottom='1rem'>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
          </Typography>
          <Typography as = 'p'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </Typography>
        </>,
      }, 
      info: {
        description: <>
          <Typography as = 'h5' marginTop='2rem' marginBottom='1rem'>Title</Typography>

          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
          </p>
   

        </>,
      }
    }
  },
]

export const getContent = ({productId}:{productId: number}) => {
  const result = content.find(c => c.productId === productId)
  return result
 
}

export default content;