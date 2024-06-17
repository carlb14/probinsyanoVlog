import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import { motion } from "framer-motion";

interface Topic {
  _id: string;
  title: string;
  description: string;
  cdn_url: string;
  facebook_url: string;
}

const getTopics = async (): Promise<Topic[]> => {
  try {
    const res = await axios.get('/api/collections', {
      headers: {
        'Cache-Control': 'no-store'
      }
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch topics");
    }

    return res.data.topics;
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw error;
  }
};

const VideoList: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsData = await getTopics();
        setTopics(topicsData);
        setTimeout(() => {
          setLoading(false);
        }, 900);
        setDataFetched(true);
      } catch (error) {
        console.error("Error setting topics:", error);
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return (
    <main className="w-full shadow-sm  shadow-neutral-300 rounded-md py-3 px-2">
      {loading ? (
        <div className="flex justify-center h-96">
          <Loading />
        </div>
      ) : (
        <motion.div
          className="h-96 overflow-y-scroll p-2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {dataFetched && topics.length === 0 ? (
            <p>No topics available.</p>
          ) : (
            topics.map((topic, index) => (
              <motion.section
                key={index}
                className="w-full p-1 mb-2 flex items-center justify-between shadow-md shadow-neutral-200 rounded-md  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.3 }}
              >
                <section className="items-center flex justify-center p-2 md:w-picture_w_vid_md w-picture_w_vid_mb">
                  <Image
                    src={topic.cdn_url}
                    alt={`picture-${index}`}
                    width={100}
                    height={100}
                    className="rounded-full p-1 shadow-md shadow-neutral-400 bg-cover"
                  />
                </section>
                <section className="md:w-descriptions_w_vid_md w-descriptions_w_vid_mb flex flex-col border-l border-neutral-200 pl-2 items-start">
                  <label className="text-sml p-1 bg-red-700 my-1 w-fit rounded-md text-white">Facebook</label>
                  <section className="pb-1">
                    <label className="text-title text-red-700">{topic.title}</label>
                    <p className="text-contentText text-neutral-700">{topic.description}</p>
                  </section>
                  <a
                    href={topic.facebook_url}
                    className="text-xx text-blue-600 pt-1 border-t border-neutral-200 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Now
                  </a>
                </section>
              </motion.section>
            ))
          )}
        </motion.div>
      )}
    </main>
  );
};

export default VideoList;