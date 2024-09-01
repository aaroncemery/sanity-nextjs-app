import { defineMigration, at, setIfMissing, unset } from 'sanity/migrate';

const from = 'content';
const to = 'body';

export default defineMigration({
  title: 'Replace content with event body',
  documentTypes: ['post'],

  migrate: {
    document(doc, context) {
      return [at(to, setIfMissing(doc[from])), at(from, unset())];
    },
  },
});
