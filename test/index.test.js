import parseMD from '../index';
import { expect } from 'chai';

describe('parseMD', function() {
  describe('when metadata is present', function() {
    it('returns metadata and the rest of the raw content', function() {
      const metaTitle = 'Glorious Title';
      const metaDescription = 'ABC123';
      const body = '# This is our house';
      const markdown = `---
        title: ${metaTitle}
        description: ${metaDescription}
        ---
        ${body}`,
        { metadata, content } = parseMD(markdown),
        { title, description } = metadata;

      expect(title).to.equal(metaTitle);
      expect(description).to.equal(metaDescription);
      expect(content).to.equal(body);
    });
  });

  describe('when metadata is absent', function() {
    it('returns just HTML content', function() {
      const markdown = '# This is our house';
      const { metadata, content } = parseMD(markdown);

      expect(metadata).to.eql({});
      expect(content).to.equal(markdown);
    });
  });
});
