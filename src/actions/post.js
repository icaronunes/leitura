export const RECEIVE_POST = 'RECEIVE_POST'

export function receivePost(post) {
   return {
       type: RECEIVE_POST,
       post
   }
}