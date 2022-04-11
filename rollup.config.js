export default{
    input : 'src/index.js',
    output : [
        {
            file :  'dist/bundle.cjs.js',
            format : 'cjs',
        },
        {
            file :  'dist/bundle.esm.js',
            format : 'esm',
        },
        {
            name : 'ReactCssSpinners',
            file :  'dist/bundle.umd.js',
            format : 'umd',
        },
        {
            name : 'ReactCssSpinners',
            file :  'dist/bundle.iife.js',
            format : 'iife',
        },
        {
            name : 'ReactCssSpinners',
            file :  'dist/bundle.system.js',
            format : 'system',
        },
    ]
}