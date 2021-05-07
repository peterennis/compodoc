const expect = require('chai').expect;

import ScanFiles from './scan-files';

describe('Use-cases - Should scan folders', () => {
    it('should find files', async () => {
        const testFolderpath = 'test/fixtures/todomvc-ng2';
        const files = await ScanFiles.scan(testFolderpath);
        expect(files.length).equal(66);
    });
});
