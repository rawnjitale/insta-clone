// pages/index.tsx
import Head from 'next/head';
import { User, Post } from './type';
import path from 'path';
import { promises as fs } from 'fs';
import PostComponent from './components/Post';
import Leftbar from './components/leftbar';
import BottomBar from './components/bbar';
interface HomeProps {
  users: User[];
}

const Home: React.FC<HomeProps> = ({ users }) => {
  return (
    <div className="container">
      <Head>
        <title>Instagram</title>
      </Head>
      <div className='p-4 h-20 font-bold  '>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</div>
      <div className='flex flex-col '>
        <div>
          <div className="flex flex-row">
            <div className="basis-2/6 w-[100%] hidden  md:block"><Leftbar /></div>
            <div className="basis-3/6">{users && users.map((user) => (
              <div key={user.id} className="user">

                <div className="user-posts">
                  {user.posts.map((post: Post) => (

                    <PostComponent key={post.id} post={post} user={user} />
                  ))}
                </div>
              </div>
            ))}</div>
            <div className="basis-1/6 hidden md:block  ">Right bar</div>
          </div>
          <div className='flex md:hidden '><BottomBar /></div>
          <div>
          </div>

        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Read the json data file instagramData.json using fs.promises
    const jsonFilePath = path.join(process.cwd(), 'pages/data', 'instagramData.json');
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');

    // Parse the JSON content
    const data = JSON.parse(fileContents);

    return {
      props: {
        users: data.users || [],
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        users: [],
      },
    };
  }
}

export default Home;
