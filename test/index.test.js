import ParseMD from '../index';
import { expect } from 'chai';
import marked from 'marked';

describe('ParseMD', function() {
  describe('when metadata is present', function() {
    it('returns metadata and HTML content', function() {
      const metaTitle = 'Glorious Title',
            metaDescription = 'ABC123',
            body = '# This is our house',
            markdown = `---
              title: ${metaTitle}
              description: ${metaDescription}
              ---

              ${body}`,
              { metadata, content } = ParseMD(markdown),
              { title, description } = metadata;

      expect(title).to.equal(metaTitle);
      expect(description).to.equal(metaDescription);
      expect(content).to.equal(marked(body));
    });
  });

  describe('when metadata is absent', function() {
    it('returns just HTML content', function() {
      const markdown = '# This is our house',
            { metadata, content } = ParseMD(markdown);

      expect(metadata).to.eql({});
      expect(content).to.equal(marked(markdown));
    });
  });
});
