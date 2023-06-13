export default function require(file = "@/assets/nav-logo.png"){
    return new URL(file, import.meta.url);
}