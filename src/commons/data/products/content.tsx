
import Typography from 'src/commons/components/Typography';
import { BoxItems } from 'src/pages/Product/components/Product.styled'
import BoxItem from 'src/commons/components/BoxItem';
import forecastingImagePath from './images/intro.jpeg'
import { UnorderedList, ListItem} from 'carbon-components-react'



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
          <Typography as = 'h5' marginBottom='1rem'>On The Road To A Quantum Future</Typography>

          <Typography as = 'p' marginBottom='.5rem'>
            Routing optimization is a critical problem for many industries such as distribution, communications, electronics, automotive and aerospace.
          </Typography>
          <Typography as = 'p'>
            For instance, with the rise of e-commerce business models, large-scale routing problems become the norm with hundreds of thousands of deliveries needed daily. The precision and speed of classical computing are reaching their limit. The capacity to optimize frequently on demand and in shorter time frames can be a differentiator for your business.          
          </Typography>
    
          {

/*

<Typography as = 'h5'  marginTop='2rem'  marginBottom='1rem'>Title</Typography>
<Typography as = 'p' marginBottom='2.5rem'>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt          
</Typography>

*/
}

<Typography as = 'h5' marginBottom='1rem' marginTop='2.5rem'>Business Value</Typography>
<Typography as = 'p' marginBottom = '2.5rem'>
  The computational complexity and business value of routing problems make them ideal for exploring the potential benefits of combining quantum and classical computational techniques to gain future advantages in solution quality and runtime.
</Typography>
          
        </>,
        asset:{
          title: 'Routing Demo',
          imageUrl: forecastingImagePath,
          link: 'https://vrp-demo-ny.hs7svmevr5p.us-south.codeengine.appdomain.cloud',
          description: <>
          {/*
          <Typography as = 'h5' marginBottom='1rem'>Title</Typography>
            <Typography as = 'p'>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
            </Typography>
            <Typography as = 'p' marginTop='1rem'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.              
            </Typography>
        */}



  <Typography as = 'h5' marginBottom='1rem'>Industry-Relevant Problem</Typography>
  <Typography as = 'p'>
  We demonstrate how quantum algorithms for optimization work fundamentally differently than classical methods.
  </Typography>
  
  <UnorderedList nested>
    <ListItem>
        Map a problem to a quantum computer and use your data to apply the algorithms in Qiskit.
    </ListItem>
    <ListItem>
        Show that quantum and classical methods can work together in the context of a real-world problem.
    </ListItem>
  </UnorderedList>

      <Typography as = 'h5' marginTop='2.5rem'>Route-Based Approach</Typography>
      <Typography as = 'p'>
      We solve the vehicle routing problem with delivery time windows and capacity constraints.

      </Typography>

          
        <UnorderedList nested>
            <ListItem>
                A classical step applying machine learning and optimization techniques to generate a set of route options.
            </ListItem>
            <ListItem>
                A quantum step applying quantum algorithms that investigates the optimal routes within the set of route options.
            </ListItem>
        </UnorderedList>
          </>,
        },
        secondaryDescription: <>
        {/* 
        
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
        */}
       <Typography as = 'h5' marginTop='2.5rem' marginBottom='1rem'>Benefits</Typography>
       <Typography as = 'h6'  marginBottom='.5rem'>Now</Typography>
       <Typography as = 'p' marginBottom='.5rem'>
         Understand quantum for business
         </Typography>
       <Typography as = 'p' marginBottom='.5rem'>
         This demo illustrates how to integrate a quantum step with classical steps within an industry problem workflow.
       </Typography>
    
       <Typography as = 'p' marginBottom='.5rem'>
         It also helps you understand how to map the problem to a quantum computer and how quantum algorithms work differently to improve searches in the universe of potential solutions.
      </Typography>
    

     
       <Typography as = 'h6'  marginBottom='.5rem' marginTop='2rem'>Next</Typography>
       <Typography as = 'p' marginBottom='.5rem'>
       Be quantum ready
         </Typography>
       <Typography as = 'p' marginBottom='.5rem'>
       The demo is the foundational step for building an asset that you can use to experiment with new data sets and quantum hardware and software to help become quantum ready.
       </Typography>
    
       <Typography as = 'p' marginBottom='.5rem'>
       The aspirational goal of the demo approach that uses quantum systems to solve complex steps within the problem workflow, is to help achieve quantum advantage as quantum hardware and software improve in the future.


      </Typography>
    
 
            
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