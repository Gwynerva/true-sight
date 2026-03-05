export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const login = String(body?.login ?? '').trim();
  const password = String(body?.password ?? '').trim();

  const config = useRuntimeConfig(event);

  const authLogin = (
    config.authLogin || (import.meta.dev ? 'root' : '')
  ).trim();
  const authPassword = (
    config.authPassword || (import.meta.dev ? 'password' : '')
  ).trim();
  const redirectUrl =
    config.adminPanelUrl || (import.meta.dev ? 'https://google.com' : '');

  if (import.meta.dev) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  if (!login || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Login and password are required!',
    });
  }

  if (login !== authLogin || password !== authPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials!',
    });
  }

  return { success: true, redirectUrl };
});
