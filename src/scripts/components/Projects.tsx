import { FaCaretRight } from 'react-icons/fa';
import TileTwo from './TileTwo';

function Text({ children }: {children:any}) {
  return (
    { children }
  )
}

Text.oneFront = () => {
  return (
    <div>
      <span className='relative top-0 left-0'><u><strong className='text-title'>Shufflez NFT</strong></u></span><br/>
      This project started as a creative and semi-original idea of making an NFT collection of a tarot deck. 
      However, due to my limited knowledge at first, the process kept growing. Still, I pushed through doing most of the activities alone. <br/>
      <a href='https://shufflez.xyz' target='_blank'>Link to website.</a><br/>
      <strong>What I did:</strong> <br/>
      <ul>
        <li>Drew 78 vector images, inspired from the Rider tarot deck.</li>
        <li>Responsive front-end development with <strong>TypeScript, React, Three.js, Tailwindcss</strong>, (among others).</li>
        <li>Back-end implementation of pre-built smart contracts of ERC721AQueryable, Ownable, and ReentrencyGuard in <strong>Solidity</strong>.</li>
        <li>Created 3D models using <strong>Blender</strong> for front-end website.</li>
        <li>Manipulated NFT images and metadata with JavaScript scripts.</li>
        <li>Set up a community-grade <strong>Discord</strong> server.</li>
        <li>Promoted the NFT on social media including <strong>Instagram, Twitter, TikTok, Discord</strong>. Connected with people on these platforms.</li> 
        <li>Lead and managed a little friend group who helped during the end.</li>
      </ul>
      <div className='text-right hover:text-emphasis-one'>Flip <div className='icon'><FaCaretRight /></div></div>
    </div>
  )
}

Text.oneBack = () => {
  return (
    <div>
      <span className='relative top-0 left-0'><u><strong className='text-title'>Shufflez NFT</strong></u></span><br/>
      <strong>What I gained:</strong> <br/>
      <ul>
        <li>Introduced to <strong>HardHat</strong> and <strong>Truffle</strong> frameworks for smart contract testing and deployment.</li>
        <li>Learned various web3 concepts, including: blockchains, smart contracts, smart contract standards, pinning services, 
            decentralized storage, ethereum 2.0 node structure (execution and consensus sub-nodes, client diversity), 
            RPCs, ethereum gas, layer 2 scaling solutions, tokenization, decentralization.</li>
        <li>Solidified front-end development skills.</li>
        <li>Learned Solidity, introduced to Vyper.</li>
        <li>Learned to manage social media and to promote a product.</li>
        <li>Strong initiative: No one will do it if I don't.</li>
        <li>Solidified communication skills with supportive (and greedy) people in the space.</li>
      </ul>
      Many of the skills and concepts required was learned during the process 🔥.
    </div>
  )
}

Text.twoFront = () => {
  return (
    <div>
      <span className='relative top-0 left-0'><u><strong className='text-title'>Python charting application</strong></u></span><br/>
      A web application that presents the <strong>top daily stock gainers</strong> (with a <strong>volume</strong> and <strong>liquidity</strong> constraint) as well as  
      a tool to view candlestick quotes. The application include all stocks in the Nasdaq and Nyse.<br/>
      <strong>What I did:</strong> <br/>
      <ul>
        <li>Created a local web application with <strong>Dash</strong>.</li>
        <li>Used <strong>Plotly</strong> to plot bar charts and <strong>Pandas</strong> for dataframes manipulation.</li>
        <li>Used <strong>Alpaca trade API</strong> for market data streaming.</li>
        <li>Transformed a large quantity of raw json data into dataframes.</li>
        <li>Cleaned and processed dataframes to extract key insights.</li>
      </ul>
      <div className='text-right hover:text-emphasis-one'>Flip <div className='icon'><FaCaretRight /></div></div>
    </div>
  )
}

Text.twoBack = () => {
  return (
    <div>
      <span className='relative top-0 left-0'><u><strong className='text-title'>Python charting application</strong></u></span><br/>
      <strong>What I gained:</strong> <br/>
      <ul>
        <li>Learned to plot graphs on a webpage.</li>
        <li>Learned to manipulate dataframes with <strong>Python</strong>.</li>
        <li>Introduced to <strong>websocket</strong>.</li>
        <li>Learned to manage API keys.</li>
        <li>Broadcasting and vectorization concepts to greatly accelerate runtime.</li>
      </ul>
      This was a neat project that could be extended to implement algorithmic trading 📈.
    </div>
  )
}

Text.threeFront = () => {
  return (
    <div>
      <span className='relative top-0 left-0'><u><strong className='text-title'>Google DAC capstone project</strong></u></span><br/>
      A project done at the end of Google's data analyst certification on Coursera.<br/>
      <strong>What I did:</strong> <br/>
      <ul>
        <li>Mainly used <strong>R with R markdown</strong> to present an analysis of an open dataset of choice, on unicorn companies.</li>
        <li>Applied each step of Google's <strong>data analysis process</strong>: ask, prepare, process, analyze, share, act.</li>
      </ul>
      <strong>This means that I:</strong>
      <ul>
        <li>Asked pertinent, guiding questions in an imaginative scenario.</li>
        <li>Prepared the dataset to be processed: Storage, data format, and bias consideration.</li>
        <li>Processed the dataset: Data cleaning.</li>
        <li>Analyzed the dataset: Identify trends and relations, and gather insights from the data.</li>
        <li>Shared the fully-documented analysis.</li>
        <li>Act: Suggestions in the imaginative scenario.</li>
      </ul>
      <div className='text-right hover:text-emphasis-one'>Flip <div className='icon'><FaCaretRight /></div></div>
    </div>
  )
}

Text.threeBack = () => {
  return (
    <div>
      <span className='relative top-0 left-0'><u><strong className='text-title'>Google DAC capstone project</strong></u></span><br/>
      <strong>What I gained:</strong> <br/>
      <ul>
        <li>Solidified R programming skills.</li>
        <li>Solidified data analyst's mindset: <strong>analytical thinking, structured thinking, design thinking</strong>.</li>
      </ul>
      In general, I solidified concepts and techniques learned during the certification.
    </div>
  )
}


export default function Projects() {
  return (
    <div id='projects'>
      <div className='title'>
        Projects.
      </div>
      <div className='projects-div'>
        
        <TileTwo 
          front={<Text.oneFront />}
          back={<Text.oneBack />}
          color="from-sky-500 to-cyan-200 hover:from-sky-400 hover:to-cyan-200"
        />
        <TileTwo 
          front={<img src={'./src/assets/img1-shflz.png'}/>}
          back={<img src={'./src/assets/img2-blender.png'}/>}
          color="from-cyan-200 to-blue-400 hover:from-blue-300 hover:to-cyan-200"
        />

        <TileTwo 
          front={<Text.twoFront />}
          back={<Text.twoBack />}
          color="from-rose-400 to-orange-100 hover:from-rose-500 hover:to-orange-100"
        />
        <TileTwo 
          front={<img src={'./src/assets/img4-scanner.png'}/>}
          back={<img src={'./src/assets/img3-chart.png'}/>}
          color="from-orange-100 to-red-400 hover:from-orange-100 hover:to-red-300"
        />

        <TileTwo 
          front={<Text.threeFront />}
          back={<Text.threeBack />}
          color="from-emerald-500 to-lime-200 hover:from-emerald-500 hover:to-lime-100"
        />
        <TileTwo 
          front={<img src={'./src/assets/img5-line.png'}/>}
          back={<img src={'./src/assets/img6-bar.png'}/>}
          color="from-lime-200 to-green-400 hover:from-lime-200 hover:to-green-300"
        />
        
      </div>
    </div>
  )
};