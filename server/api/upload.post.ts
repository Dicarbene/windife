import formidable from 'formidable'

/**
 * @param {import('http').IncomingMessage} req
 */
function doSomethingWithNodeRequest(req) {
  return new Promise((resolve, reject) => {
    /** @see https://github.com/node-formidable/formidable/ */
    const form = formidable({ multiples: true })
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error)
        return
      }
      resolve({ ...fields, ...files })
    })
  })
}

export default defineEventHandler(async (event) => {
  const nodeRequestObject = event.node.req

  const body = await doSomethingWithNodeRequest(event.node.req)
  // console.log(body)

  return { ok: true }
})
