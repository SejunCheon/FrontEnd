import sendRequest from './sendRequest'

export default{
    getMemos() {
        return sendRequest({
            url: '/api/memos',
            method:'get'
        })
    },
    getMemo(memoId){
        return sendRequest({
            url:'/api/memos' + memoId,
            method:'get'
        })
    }
}