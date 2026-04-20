/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This environment blocks `child_process.fork()` with IPC (spawn EPERM),
    // so we avoid build workers that rely on it.
    workerThreads: true,
    webpackBuildWorker: false,
    parallelServerCompiles: false,
    parallelServerBuildTraces: false,
  },
}

module.exports = nextConfig
