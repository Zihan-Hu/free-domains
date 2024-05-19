addSubDomain({
  description: 'A simple roll-call tool',
  domain: 'is-an.app',
  subdomain: 'ex-caller',
  owner: {
    repo: 'https://github.com/typed-sigterm/ex-caller',
    email: 'typed-sigterm@gmail.com',
  },
  record: {
    CNAME: 'ex-caller.netlify.app',
  },
})
