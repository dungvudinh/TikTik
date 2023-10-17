import {getSearchResult} from '~/utils/httpRequest';

export const search = async (query)=>
{
  try {
    const res = await getSearchResult(`/user`, {
        params:{
            q:query
        }
    })
   return res;
  }
  catch(err)
  {
    console.log(err);
  }
}