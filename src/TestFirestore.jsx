import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const TestFirestore = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogCollection = collection(db, 'blogData');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('🔥 Blog Data from Firestore:', blogList);
      } catch (error) {
        console.error('❌ Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default TestFirestore;
